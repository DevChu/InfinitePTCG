package tw.doublec.service;

import java.util.List;

import org.bson.Document;

public interface DecklistRepo {
	List<Document> findAllDecklist();
}
