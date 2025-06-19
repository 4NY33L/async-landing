const content = null || document.getElementById('content')
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCu4MuJsXVDAPSFzNC7liLLQ&part=snippet%2Cid&order=date&maxResults=7';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bfd76f3764msh60d5320feaf11dcp16cc18jsne29e94512fdd',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
}

async function fetchData(urlApi) {
    const res = await fetch(urlApi, options)
    const data = await res.json()

    return data
}

(async () => {
    try {
        const videos = await fetchData(url, options);
        const views = videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `  
        ).slice(0, 4).join('')
        content.innerHTML = views
    } catch (error) {
        console.error(error);
    }
})()