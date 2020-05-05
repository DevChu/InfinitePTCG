package tw.doublec.service;

import java.util.List;

import tw.doublec.dto.User;
import org.bson.Document;

public interface DecklistService {
	public abstract long generateSequence(String seqName);
	public abstract List<User> findAll();
	List<Document> findByDecklist();
}
