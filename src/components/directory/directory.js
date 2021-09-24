import React from "react";
import MenuItem from "../menuItem/menuItem";
import './directory.styles.scss';
import {connect} from "react-redux";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => (
    (
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps}) =>
                <MenuItem
                    key={id}
                    {...otherSectionProps} />)}
        </div>
    )
);

const mapStateToProps = (state) => ({
    sections: selectDirectorySection(state)
})

export default connect(mapStateToProps)(Directory);
