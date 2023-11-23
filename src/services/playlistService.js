import arrayUtils from "./utilities/arrayUtilities"

export default class PlaylistService
{
    constructor(spotifyService) 
    {
        this.spotifyService = spotifyService
    }

    async loadPlaylistData(playlistId) 
    {
        let playlistData = await this.spotifyService
            .getPlaylistData(playlistId)
        
        this.playListName = playlistData['name']

        console.log(this.playListName)

        this.tracks = playlistData['tracks']['items']
        
        arrayUtils.shuffle(this.tracks);

        this.trackStack = this.tracks;
    }

    getNextTrackData() 
    {
        if (arrayUtils.isEmpty(this.trackStack))
        {
            this.trackStack = this.tracks;

            return this.trackstack.pop();
        }

        return this.trackStack.pop();
    }
}
