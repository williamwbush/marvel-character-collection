const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjE3MmFhNjI0ODBlMTQzM2NjMjUxZDM2NWI5YzI2OTg4N2ZmZGE5Nzg3OGY1ODUxNSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTIxIDIzOjI2OjM5LjM5MzA3OVwiIn0.QdaxrwS_VmcLo-68LgSID5Db293CmiurSV04RUbd4sk'

const heroku_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjdjY2JjZTQ4NzdlNmUzM2E2MmRmMzNjMzQwYTY3NjMzMTVmMDgwYTYzMjJmMGU1ZSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTIyIDA0OjQ2OjM1LjcyNDQwNVwiIn0.tN93uQt-zjhrGnHFoZbTu6R7cghqnKwVRnj0JvWfeD0'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-character-api-wb.herokuapp.com/characters`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },    
	delete: async (id:string) => {
        const response = await fetch(`https://marvel-character-api-wb.herokuapp.com/characters/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
	update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-character-api-wb.herokuapp.com/characters/${id}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
	create: async (data:any = {}) => {
        const response = await fetch(`https://marvel-character-api-wb.herokuapp.com/characters`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    }
}