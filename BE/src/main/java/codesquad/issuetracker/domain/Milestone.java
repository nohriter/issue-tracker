package codesquad.issuetracker.domain;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Milestone {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "milestone_id")
	private Long id;
	
	@Column(length = 255)
	private String title;

	@Column(length = 8192)
	private String description;

	private LocalDate deadline;

}
