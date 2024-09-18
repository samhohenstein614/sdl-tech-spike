import './App.css'
import gitlab_logo from './assets/GitLab_Logo.jpg'
import azure_logo from './assets/AzureDevOps_Logo.jpg'
import google_logo from './assets/GoogleCloud_Logo.jpg'
import { useState } from 'react';

function App() {
    const [gl_likes, setGlLikes] = useState(0);
    const [gl_dislikes, setGlDislikes] = useState(0);
    const [ad_likes, setAdLikes] = useState(0);
    const [ad_dislikes, setAdDislikes] = useState(0);
    const [gc_likes, setGcLikes] = useState(0);
    const [gc_dislikes, setGcDislikes] = useState(0);

    // Handlers for button clicks
    const handleGlLike = () => setGlLikes(gl_likes + 1);
    const handleGlDislike = () => setGlDislikes(gl_dislikes + 1);
    const handleAdLike = () => setAdLikes(ad_likes + 1);
    const handleAdDislike = () => setAdDislikes(ad_dislikes + 1);
    const handleGcLike = () => setGcLikes(gc_likes + 1);
    const handleGcDislike = () => setGcDislikes(gc_dislikes + 2);

    return (
        <>
            <h1><span id='gl'>GitLab</span> vs <span id='ad'>Azure DevOps</span> vs <span id='gc'>Google Cloud</span></h1>
            <div id='logos'>
                <img src={gitlab_logo} alt='GitLab Logo' />
                <img src={azure_logo} alt='Azure DevOps Logo' />
                <img src={google_logo} alt='Google Cloud Logo' />
            </div>

            <div id='buttons'>
                <button className='gl_buttons' id='gl_like' onClick={handleGlLike}>👍</button>
                <button className='gl_buttons' id='gl_dislike' onClick={handleGlDislike}>👎</button>
                <button className='ad_buttons' id='ad_like' onClick={handleAdLike}>👍</button>
                <button className='ad_buttons' id='ad_dislike' onClick={handleAdDislike}>👎</button>
                <button className='gc_buttons' id='gc_like' onClick={handleGcLike}>👍</button>
                <button className='gc_buttons' id='gc_dislike' onClick={handleGcDislike}>👎</button>
            </div>

            <div id='likes'>
                <p id='gl_likes'>GitLab Likes: {gl_likes}</p>
                <p id='gl_dislikes'>GitLab Dislikes: {gl_dislikes}</p>
                <p id='ad_likes'>Azure Likes: {ad_likes}</p>
                <p id='ad_dislikes'>Azure Dislikes: {ad_dislikes}</p>
                <p id='gc_likes'>Google Likes: {gc_likes}</p>
                <p id='gc_dislikes'>Google Dislikes: {gc_dislikes}</p>
            </div>
        </>
    )
}

export default App
