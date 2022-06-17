package codesquad.issuetracker.web.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class GithubTokenRequestDto {

	private String clientId;
	private String clientSecret;
	private String code;

	public GithubTokenRequestDto(String clientId, String clientSecret, String code) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.code = code;
	}

}
