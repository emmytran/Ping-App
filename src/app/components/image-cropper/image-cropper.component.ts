import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit {
  constructor(public popover: PopoverController) {
    // this.makeCropper = this.makeCropper.bind(this)
    // this.loadImage = this.loadImage.bind(this)
  }

  @Input() imgFile;
  @Input() ratio;

  imgSrc: string;
  cropper: Cropper;

  ngOnInit() {
    // there was a bug involving nested accesses to 'this'
    // reverted to calling loadimage in here
    // kyle has reported occasional misfires when it is triggered like this
    // so we'll need to look into it again
    this.loadImage(this.imgFile)
  }

  makeCropper(image) {
    if(this.cropper) {
      this.cropper.destroy()
    }

    this.cropper = new Cropper(image, {
      aspectRatio: this.ratio,
      rotatable: false,
      scalable: false,
      toggleDragModeOnDblclick: false,
      //responsive: true,
      viewMode: 2,

    })
  }

  changeImage(ev) {
    if(ev.target.files[0]) {
      this.loadImage(ev.target.files[0])
    }
  }

  loadImage(file) {
    var image = <HTMLImageElement>document.getElementById('image');
    var self = this
    let reader = new FileReader();

    image.onload = function() {
      self.makeCropper(this);
    }
    
    reader.onload = function (e) {
      self.imgSrc = e.target.result as string;
    }

    reader.readAsDataURL(file);
  }

  cancel() {
    if(this.cropper) {
      this.cropper.destroy()
    }

    this.popover.dismiss()
  }

  done() {
    var returnData = {
      'sourceImage': {
        'file': this.imgFile,
        'cropData': this.cropper.getData(true)
      },
      'previewImage': this.cropper.getCroppedCanvas()
    };
    
    if(this.cropper) {
      this.cropper.destroy()
    }

    this.popover.dismiss(returnData)
  }
}
