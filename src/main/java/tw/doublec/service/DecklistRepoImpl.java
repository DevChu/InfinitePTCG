package tw.doublec.service;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.stereotype.Component;
import tw.doublec.dto.User;

@Component
public class DecklistRepoImpl implements DecklistRepo {
	private final MongoTemplate mongoTemplate;
	@Autowired
    public DecklistRepoImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

	@Override
	public List<Document> findAllDecklist() {
		List<AggregationOperation> list = new ArrayList<AggregationOperation>();
		list.add(Aggregation.unwind("decklist"));
		TypedAggregation<User> agg = Aggregation.newAggregation(User.class, list);
		AggregationResults<Document> result = mongoTemplate.aggregate(agg,Document.class);
        result.getMappedResults().forEach(document -> System.out.println(document));
        
        System.out.println("==="+result.getMappedResults().get(0).getString("username"));
		return result.getMappedResults();
	}

}
