package tw.doublec.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tw.doublec.service.DecklistService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class IndexController {
	@Autowired
	DecklistService decklistService;
	
	@GetMapping(value="/decklist")
	public ResponseEntity<?> allDeckList(){
//		List<User> users = decklistService.findAll();
		List<Document> users = decklistService.findByDecklist();
		Map<String, Object> result = new HashMap<>();
		result.put("decklist", users);
		return ResponseEntity.ok(result);
	}

}
