import { caregiverRepository, genericNextTypegooseEndpoint } from 'arch'

const caregiverEndpoint = genericNextTypegooseEndpoint(caregiverRepository)

export const GET = caregiverEndpoint.GET
export const POST = caregiverEndpoint.POST
export const PUT = caregiverEndpoint.PUT
export const DELETE = caregiverEndpoint.DELETE

// export const helloEndpoint = HttpRepositoryEndpointClient<CaregiverRepository>('http://localhost:3000/api/v1/personas/caregivers', { 'content-type': 'application/json', 'access-control-allow-origin': '*' })