package tw.doublec.dto;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Field;

public class Deck {
	@Transient
	public static final String SEQUENCE_NAME = "deck_sequence";
	@Field("_id")
	private long id;
	private String name;
	@Field("create_time")
	private Date createTime;
	@Field("last_update_time")
	private Date lastUpdateTime;
	private String description;
	@Field("is_publish")
	private Boolean isPublish;
	private List<Object> cards;
}
