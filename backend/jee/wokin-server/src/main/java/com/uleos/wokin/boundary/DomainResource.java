package com.uleos.wokin.boundary;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Stateless
@Path("domains")
public class DomainResource {
	@GET
	public Response getDomains() {
		return null;
	}

}
