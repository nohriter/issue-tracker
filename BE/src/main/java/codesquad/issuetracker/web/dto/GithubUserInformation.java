package codesquad.issuetracker.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class GithubUserInformation {

	@JsonProperty("login")
	private String githubId;

	@JsonProperty("name")
	private String username;

	@JsonProperty("node_id")
	private String userSecret;

	@JsonProperty("avatar_url")
	private String imageUrl;

}
