package tw.doublec.dto;

import java.util.Date;
import java.util.List;

public class PokemonCard {
	private int id;
	private String name;
	private String type;
	private Integer hp;
	private Integer stage;
	private Integer retreat;
	private String weakness;
	private String resistance;
	private String number;
	private String expansion;
	private Date releaseDate;
	private String imageLink;
	private List<Attack> technicals;

	private class Attack {
		private String name;
		private String damage;
		private String description;
		private String[] cost;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getDamage() {
			return damage;
		}

		public void setDamage(String damage) {
			this.damage = damage;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String[] getCost() {
			return cost;
		}

		public void setCost(String[] cost) {
			this.cost = cost;
		}
	}
}
