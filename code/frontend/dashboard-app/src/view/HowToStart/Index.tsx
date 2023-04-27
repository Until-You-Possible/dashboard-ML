import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function HowToStart() {
    return (
        <div className="HowToStartContainer">
            <h1>why we choose the iris demo or data?</h1>
            <div>
                The Iris dataset is deservedly widely used throughout statistical science,
                especially for illustrating various problems in statistical graphics, multivariate statistics and machine learning.
            </div>
            <br/>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        Containing 150 observations, it is small but not trivial.
                    </p>
                </div>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        The task it poses of discriminating between three species of Iris from measurements of their petals and sepals is simple but challenging.
                    </p>
                </div>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        The data are real data, but apparently of good quality. In principle and in practice, test datasets could be synthetic and that might be necessary or useful to make a point. Nevertheless, few people object to real data.
                    </p>
                </div>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        The data were used by the celebrated British statistician Ronald Fisher in 1936. (Later he was knighted and became Sir Ronald.) At least some teachers like the idea of a dataset with a link to someone so well known within the field. The data were originally published by the statistically-minded botanist Edgar Anderson, but that earlier origin does not diminish the association.
                    </p>
                </div>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        Using a few famous datasets is one of the traditions we hand down,
                        such as telling each new generation that Student worked for Guinness or that many famous statisticians fell out with each other.
                        That may sound like inertia, but in comparing methods old and new, and in evaluating any method,
                        it is often considered helpful to try them out on known datasets, thus maintaining some continuity in how we assess methods.
                    </p>
                </div>
                <div className="factorsUsage">
                    <PlayArrowIcon style={{color: "#007FFF"}} />
                    <p>
                        Last, but not least, the Iris dataset can be enjoyably coupled with pictures of the flowers concerned, as from e.g. the useful Wikipedia entry on the dataset.
                    </p>
                </div>
        </div>
    );
}

export default HowToStart;