import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createImage } from './store';

class Images extends Component {
  componentDidMount(){
    const fileReader = new FileReader();
    fileReader.addEventListener('load', ()=> {
      this.props.createImage(fileReader.result);
    });
    this.el.addEventListener('change', ()=> {
      fileReader.readAsDataURL(this.el.files[0]);
    });
  }
  render(){
    const { images } = this.props;
    return (
        <div>
          <input ref={ el => this.el = el } type='file' />
          <ul>
          {
            images.map( image => <img key={ image.id } src={ image.data } />)

          }</ul>
        </div>
    );
  }
}

const mapStateToProps = ({ images })=> {
  return {
    images
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    createImage: (data)=> dispatch(createImage(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
