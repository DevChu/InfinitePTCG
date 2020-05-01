package tw.doublec.service;

import java.util.List;
import java.util.Objects;

import com.ptcg.db.vo.DatabaseSequence;
import com.ptcg.db.vo.User;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class DecklistServiceImpl implements DecklistService {
	@Autowired
	MongoOperations mongoOperations;
	@Autowired
	DecklistRepository decklistRepository;
	@Autowired
	DecklistRepo decklistRepo;
	@Override
	public long generateSequence(String seqName) {
		// get sequence id
		Query query = new Query(Criteria.where("_id").is(seqName));
		// increase sequence id by 1
		Update update = new Update();
		update.inc("seq", 1);
		// return new increased id
		FindAndModifyOptions options = new FindAndModifyOptions();
		options.returnNew(true);
		options.upsert(true);
		DatabaseSequence counter = mongoOperations.findAndModify(query, update, options, DatabaseSequence.class);
		return !Objects.isNull(counter) ? counter.getSeq() : 1;
	}

//	@Override
//	public List<PmDeck> findAll() {
//		List<PmDeck> pdList = decklistRepository.findAll();
//		return pdList;
//	}
	@Override
	public List<User> findAll() {
		List<User> pdList = decklistRepository.findAll();
		return pdList;
	}
	@Override
	public List<Document> findByDecklist(){
		List<Document> users = decklistRepo.findAllDecklist();
		return users;
	}
}
