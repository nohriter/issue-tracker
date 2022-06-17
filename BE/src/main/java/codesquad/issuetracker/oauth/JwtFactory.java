package codesquad.issuetracker.oauth;

import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtFactory {

	private final Algorithm algorithm;

	public JwtFactory(@Value("${auth.jwt.secret_key}") String secretKey) {
		this.algorithm = Algorithm.HMAC256(secretKey);
	}

	//TODO 미구현

}
