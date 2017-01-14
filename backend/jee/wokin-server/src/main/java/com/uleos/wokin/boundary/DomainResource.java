package com.uleos.wokin.boundary;

import javax.ejb.Stateless;
import javax.json.Json;
import javax.json.JsonArray;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Stateless
@Path("domains")
public class DomainResource {
	@GET
	public Response getDomains() {

		JsonArray domains = Json.createArrayBuilder()
				.add(Json.createObjectBuilder().add("id", "10").add("name", "domain1.tld"))
				.add(Json.createObjectBuilder().add("id", "20").add("number", "domain2.tld")).build();

		return Response.ok(domains).build();
	}

}
