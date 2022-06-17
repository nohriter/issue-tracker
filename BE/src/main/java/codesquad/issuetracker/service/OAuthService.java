package codesquad.issuetracker.service;

import codesquad.issuetracker.web.dto.GithubAccessToken;
import codesquad.issuetracker.web.dto.GithubTokenRequestDto;
import codesquad.issuetracker.web.dto.GithubUserInformation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Slf4j
@Service
public class OAuthService {

	private static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
	private static final String GITHUB_RESOURCE_URL = "https://api.github.com/user";

	private final String clientId;
	private final String clientSecret;

	public OAuthService(
		@Value("${oauth.github.client_id}") String clientId,
		@Value("${oauth.github.client_secret}") String clientSecret) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
	}

	public GithubUserInformation login(String code) {
		GithubTokenRequestDto githubTokenRequestDto = new GithubTokenRequestDto(clientId,
			clientSecret, code);

		GithubAccessToken githubAccessToken = requestAccessToken(githubTokenRequestDto);

		return requestUserInformation(githubAccessToken);
	}

	private GithubAccessToken requestAccessToken(GithubTokenRequestDto githubTokenRequestDto) {
		return WebClient
			.builder()
			.baseUrl(GITHUB_ACCESS_TOKEN_URL)
			.build()
			.post()
			.bodyValue(githubTokenRequestDto)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(GithubAccessToken.class)
			.block();
	}

	private GithubUserInformation requestUserInformation(GithubAccessToken githubAccessToken) {
		String tokenString = createTokenString(githubAccessToken);

		return WebClient.builder()
			.baseUrl(GITHUB_RESOURCE_URL)
			.build()
			.get()
			.header("Authorization", tokenString)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(GithubUserInformation.class)
			.block();
	}

	private String createTokenString(GithubAccessToken githubAccessToken) {
		return "token " + githubAccessToken.getAccessToken();
	}

}
