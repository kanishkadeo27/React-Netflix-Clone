import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historial</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fic">Sci-fic</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="data:image/jpeg;base64,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" alt="netflix-logo" width='100%' />
        <div className="info">
            <img src='https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWF0cml4fGVufDB8fDB8fHww' alt='img'/>
            <span className='desc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ab odio necessitatibus quae ex harum provident tempore minima laborum? Minus, voluptas officia voluptates dolorem esse impedit. Perferendis quae recusandae accusamus!
            </span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Featured