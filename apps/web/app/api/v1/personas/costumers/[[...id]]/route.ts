import { genericNextTypegooseEndpoint, costumerRepository } from 'arch';

const costumerEndpoint = genericNextTypegooseEndpoint(costumerRepository)

export const GET = costumerEndpoint.GET
export const POST = costumerEndpoint.POST
export const PUT = costumerEndpoint.PUT
export const DELETE = costumerEndpoint.DELETE

// export const helloEndpoint = HttpRepositoryEndpointClient<CostumerRepository>('http://localhost:3000/api/v1/personas/costumers', { 'content-type': 'application/json', 'access-control-allow-origin': '*' })
