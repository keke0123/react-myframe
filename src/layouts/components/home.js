import React, {useContext} from 'react';
import Counter from "../../views/counter";

function Home(props, ref) {
    console.log('props', props);

    return (
        <div>
            home page
            <Counter></Counter>
        </div>
    )
}

export default Home;

// module.exports = Home;
