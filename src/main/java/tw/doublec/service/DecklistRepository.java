package tw.doublec.service;

import java.util.List;

import tw.doublec.dto.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DecklistRepository extends MongoRepository<User, String> {
	@Query(value = "{ 'deckIdList.deckname' : ?0 }")
    List<User> findByDecklist(String username);
}
