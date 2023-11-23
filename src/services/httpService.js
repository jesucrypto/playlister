const httpService = 
{
    get : async function (url, authorizationToken)
    {
        let options = { method : 'GET'}

        if (authorizationToken != null) 
        {
            options.headers = { 'Authorization' : `Bearer ${authorizationToken}` }
        }

        return await this.basicFetch(url, options);
    },

    post : async function (url, options)
    {
        options.method = 'POST'
        
        return await this.basicFetch(url, options)
    },
    
    put: async function(url, authToken, options)
    {
        options.method = 'PUT';

        options.headers = 
        {
            'Authorization' : `Bearer ${authToken}`,
            'Content-Type' : 'application/json'
        }

        return await this.basicFetch(url, options);
    },

    basicFetch : async (url, options) => 
    {
        return await fetch(url, options).then(res => 
            {
                if (!res.ok) 
                {
                    throw new Error(`HTTP Error: ${res.status}`)
                }

                return res.json()
            });
    }
}

export default httpService