import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID J_WYKp3A8gpK8BWjnjEnf5bTv8aTohvbDiUuAU9O8SQ',
    },
})
