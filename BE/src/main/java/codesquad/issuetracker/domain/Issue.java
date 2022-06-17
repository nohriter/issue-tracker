package codesquad.issuetracker.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Issue extends CommonEntity {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "issue_id")
	private Long id;

	@Column(length = 60, nullable = false)
	private String title;

	@Enumerated(EnumType.STRING)
	private IssueStatus issueStatus;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "milestone_id")
	private Milestone milestone;

	@OneToMany(mappedBy = "issue")
	private List<Assignee> assignees = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.REMOVE)
	private List<Comment> comments = new ArrayList<>();

	@OneToMany(mappedBy = "issue")
	private List<Label> labels = new ArrayList<>();

}
