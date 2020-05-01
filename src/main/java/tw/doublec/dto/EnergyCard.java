package tw.doublec.dto;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Field;

public class EnergyCard {
	private int id;
	private Boolean isBasic;
	private String description;
	private String imageLink;
	@Field("release_date")
	private Date releaseDate;
}
