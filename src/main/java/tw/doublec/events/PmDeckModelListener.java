package tw.doublec.events;

import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.stereotype.Component;
import tw.doublec.dto.Deck;

@Component
public class PmDeckModelListener extends AbstractMongoEventListener<Deck> {
//	private DecklistService decklistService;

//    @Autowired
//    public PmDeckModelListener(DecklistService decklistService) {
//        this.decklistService = decklistService;
//    }
//	@Override
//	public void onBeforeConvert(BeforeConvertEvent<PmDeck> event) {
//	    if (event.getSource().getId() < 1) {
//	        event.getSource().setId(decklistService.generateSequence(PmDeck.SEQUENCE_NAME));
//	    }
//	}
}
