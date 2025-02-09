import { TGood } from '../Abstarct/Types';
import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class Slider extends Component {
	private nameGood: string = '';
	private photos: string[] = [];

	private imgLeft: Component;
	private imgCenter: Component;
	private imgRight: Component;
	private divsSlider: Component;

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['slider__wrapper']);

		this.divsSlider = new Component(this.root, 'div', ['slider']);
		const divPhotoLeft = new Component(this.divsSlider.root, 'div', [
			'left_slider',
		]);
		this.imgLeft = new Component(
			divPhotoLeft.root,
			'img',
			[],
			null,
			['src', 'alt'],
			[this.photos[0], this.nameGood]
		);

		const divPhotoCenter = new Component(this.divsSlider.root, 'div', [
			'center_slider',
		]);
		this.imgCenter = new Component(
			divPhotoCenter.root,
			'img',
			[],
			null,
			['src', 'alt'],
			[this.photos[0], this.nameGood]
		);

		const divPhotoRight = new Component(this.divsSlider.root, 'div', [
			'right_slider',
		]);
		this.imgRight = new Component(
			divPhotoRight.root,
			'img',
			[],
			null,
			['src', 'alt'],
			[this.photos[0], this.nameGood]
		);
	}

	public setPhoto(good: TGood): void {
		this.nameGood = good.title;
		const arrPhotos = [];
		if (good.photoLink.length > 0) arrPhotos.push(good.photoLink);
		arrPhotos.push(...good.slider);
		this.photos = arrPhotos;
		[this.imgLeft, this.imgCenter, this.imgRight].forEach((img) => {
			(img.root as HTMLImageElement).src = this.photos[0];
			(img.root as HTMLImageElement).alt = this.nameGood;
		});
	}
}
