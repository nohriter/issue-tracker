package codesquad.issuetracker.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Assignee {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assignee_id")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "issue_id")
	private Issue issue;
	
}
