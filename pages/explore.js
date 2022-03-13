import exploreStyle from '../styles/Explore.module.css';

import ShowBox from '../components/ShowBox.js'

export default function explore( { title, desc  } ) {
    return (
        <div className={exploreStyle.main}>
            <h3>hello world</h3>

            <ShowBox title={'hello'} desc={'hell owrld'}/>
        </div>
    )
}