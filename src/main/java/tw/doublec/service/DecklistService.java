package tw.doublec.service;

import java.util.List;

import com.ptcg.db.vo.User;
import org.bson.Document;

public interface DecklistService {
	public abstract long generateSequence(String seqName);
	public abstract List<User> findAll();
	List<Document> findByDecklist();
}
