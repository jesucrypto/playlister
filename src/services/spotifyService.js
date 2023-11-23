import httpService from "./httpService";

export default class SpotifyService
{
    constructor(baseUrl, clientId, clientSecret)
    {
        this.baseUrl = baseUrl;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    async play(playContext)
    {
        let body = { context_uri : playContext };

        let options = { body : JSON.stringify(body)}

        await httpService.put(
            'https://api.spotify.com/v1/me/player/play',
            this.authorizationToken,
            options
        )
    }   

    async loadToken()
    {
        let formData = new URLSearchParams()

        formData.append('grant_type', 'client_credentials')
        formData.append('client_id', this.clientId)
        formData.append('client_secret', this.clientSecret)

        let options = 
        {
            headers: 
            {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            
            body : formData.toString()
        }

        let token =  await httpService.post
        (
            'https://accounts.spotify.com/api/token',
            options
        )

        this.authorizationToken = token['access_token']
    }

    async getAllUserPlaylists()
    {
        
    } 

    async getPlaylistData(playlistId)
    {
        return await httpService.get
        (
            `${this.baseUrl}/playlists/${playlistId}`, 
            this.authorizationToken
        );
    }


}