package tw.doublec.dto;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Field;

public class TrainerCard {
	private int id;
	private String name;
	private String trainerType; // item / supporter
	private Boolean isTool;
	private String description;
	private String imageLink;
	@Field("release_date")
	private Date releaseDate;
}
