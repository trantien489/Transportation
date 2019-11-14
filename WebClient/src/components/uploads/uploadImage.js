import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col
} from "reactstrap";
import { getByIdImage, addImage } from '../../actions/image';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import LoadingOverlay from 'react-loading-overlay';
import key from '../../i18n/key';
import { toastr } from 'react-redux-toastr';
class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      uploader: {
        isEnableModal: false,
        isEnableRemoveModal: false,
        src: '',
        cropResult: '',
        fileName: '',
        value: value,
        isLoadingImage: true
      }
    };
  }
  ToggleModal() {
    let { uploader } = this.state;
    uploader.isEnableModal = !uploader.isEnableModal;
    if (uploader.isEnableModal === false) {
      uploader.cropResult = '';
      uploader.fileName = '';
      uploader.src = '';
    }
    this.setState({ uploader });
  }
  ToggleRemoveModal() {
    let { uploader } = this.state;
    uploader.isEnableRemoveModal = !uploader.isEnableRemoveModal;
    this.setState({ uploader });
  }
  handleRemoveImage() {
    this.props.callback();
    let { uploader } = this.state;
    uploader.value = [];
    uploader.isEnableRemoveModal = !uploader.isEnableRemoveModal;
    this.setState({ uploader });
  }
  onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      let { uploader } = this.state;
      uploader.src = reader.result;
      uploader.fileName = files[0].name;
      this.setState({ uploader });
    };
    reader.readAsDataURL(files[0]);
  }
  cropImage() {
    if (this.cropper.getCroppedCanvas() === null) {
      return;
    }
    const { width, height } = this.props;
    let cropResult = this.cropper.getCroppedCanvas({ width: width, height: height, imageSmoothingQuality: 'high', imageSmoothingEnabled: true }).toDataURL();
    let { uploader } = this.state;
    uploader.cropResult = cropResult;
    this.setState({ uploader });
  }
  Upload() {
    let { uploader } = this.state;
    var request = {
      Name: uploader.fileName,
      Alt: '',
      Note: '',
      ImageTypeId: 10007,
      Base64String: uploader.cropResult
    }
    this.props.addImage(request);
  }
  handleImageLoaded() {
    let { uploader } = this.state;
    uploader.isLoadingImage = false;
    this.setState({ uploader });
  }
  componentWillReceiveProps(nextProps) {
    const { resultAddImage, t } = nextProps;
    if (resultAddImage && resultAddImage.isLoading) {
      return;
    }
    let { uploader } = this.state;
    if (resultAddImage && resultAddImage.responseData && uploader.cropResult) {
      if (resultAddImage.responseData.success) {
        uploader.isEnableModal = false;
        uploader.cropResult = '';
        uploader.fileName = '';
        uploader.src = '';
        uploader.isLoadingImage = true;
        let host = process.env.REACT_APP_URL_BASE_API;
        uploader.value = [(host + resultAddImage.responseData.Data)];
        this.setState({ uploader });
        this.props.callback(uploader.value);
        toastr.success("Image", t(key.common.addDataSuccess));
      } else {
        toastr.error("Image", t(key.common.addDataFail));
      }
    }
  }
  render() {
    const { quantity, t, resultAddImage, width, height } = this.props;
    let { uploader } = this.state;
    return (
      <div>
        <Modal isOpen={uploader.isEnableModal} size='md' backdrop='static'
          className='modal-lg modal-primary'>
          <ModalHeader >{t(key.common.upload)}</ModalHeader>
          <LoadingOverlay active={resultAddImage.isLoading} spinner text={t(key.common.processingSpinner)}>
            <ModalBody>
              <Row>
                <Col md="12">
                  <Button type="file" className="btn-twitter btn-brand mr-1 mb-1" onClick={() => document.getElementById("upload-file").click()} >
                    <i className="fa fa-upload"></i><span>{t(key.common.chooseFile)}</span>
                    <input type="file" id="upload-file" style={{ display: 'none' }} onChange={(file) => this.onChange(file)} />
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="9">
                  <Cropper
                    ref={cropper => { this.cropper = cropper; }}
                    src={uploader.src}
                    style={{ height: 400, width: '100%' }}
                    aspectRatio={width / height}
                    guides={false}
                  />
                  <Button style={{ float: 'right' }} className="btn-twitter btn-brand mr-1 mb-1" onClick={() => this.cropImage()} hidden={uploader.fileName ? false : true}><i className="fa fa-crop"></i><span>{t(key.common.crop)}</span></Button>
                </Col>
                <Col md="3">
                  {
                    uploader.cropResult &&
                    <img style={{ width: '100%', boxShadow: '0px 0px 15px 0px grey' }} src={uploader.cropResult} alt="" />
                  }
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="btn-twitter btn-brand mr-1 mb-1" onClick={() => this.Upload()} disabled={uploader.cropResult ? false : true}><i className="fa fa-save"></i><span>{t(key.common.btnSubmit)}</span></Button> {' '}
              <Button className="btn-pinterest btn-brand mr-1 mb-1" onClick={() => this.ToggleModal()}><i className="fa fa-undo"></i><span>{t(key.common.btnCancel)}</span></Button>
            </ModalFooter>
          </LoadingOverlay>
        </Modal>
        <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1" onClick={() => this.ToggleModal()}><i className="fa fa-cloud-upload"></i><span>{t(key.common.upload)}</span></Button>
        <Row>
          <Modal isOpen={uploader.isEnableRemoveModal} size='md' backdrop='static'
            className='modal-danger'>
            <ModalHeader>{t(key.common.infoTitleConfirmModal)}</ModalHeader>
            <ModalBody>{t(key.common.deleteConfirmModal)}</ModalBody>
            <ModalFooter>
              <Button className="label-button-confirm" color='danger' onClick={() => this.handleRemoveImage()} >{t(key.common.btnOk)}</Button>{' '}
              <Button className="label-button-confirm" color="secondary" onClick={() => this.ToggleRemoveModal()}>{t(key.common.btnCancel)}</Button>
            </ModalFooter>
          </Modal>
          {
            uploader.value && uploader.value.length > 0 && uploader.value.map((image, index) =>
              index < parseInt(quantity)
              &&
              <Col md="3" key={index}>
                <LoadingOverlay active={uploader.isLoadingImage} spinner>
                  <div className="UploaderImage">
                    <img style={{ width: '100%', boxShadow: '0px 0px 15px 0px grey' }} onLoad={this.handleImageLoaded.bind(this)} src={image} alt='' />
                    <div className="ImageRemoveIcon" onClick={() => this.ToggleRemoveModal()}><i className="fa fa-trash-o fa-lg"></i></div>
                  </div>
                </LoadingOverlay>
              </Col>
            )
          }
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  resultGetByIdImage: state.getByIdImageReducer,
  resultAddImage: state.addImageReducer,
});
const mapDispatchToProps = {
  getByIdImage,
  addImage,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(UploadImage));
