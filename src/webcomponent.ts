export class JustTimeWebcomponent extends HTMLElement {
	timer: number | undefined

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	connectedCallback() {
		this.loop()
	}

	twoDigits(input: number) {
		return input.toString().padStart(2, '0')
	}
	updateTime() {
		// @TODO: detect selection over time only
		const isUserSelecting = !document.getSelection().isCollapsed
		if (isUserSelecting) {
			return
		}

		const now = new Date()
		this.shadowRoot.innerHTML = `${this.twoDigits(
			now.getHours(),
		)}:${this.twoDigits(now.getMinutes())}${
			this.hideSeconds ? '' : `:${this.twoDigits(now.getSeconds())}`
		}`
	}

	loop = () => {
		this.updateTime()
		const now = new Date()
		const nextTick = Math.max(1, 1000 - (now.getTime() % 1000))
		this.timer = window.setTimeout(this.loop, nextTick)
	}

	get hideSeconds() {
		return this.hasAttribute('hide-seconds')
	}

	disconnectedCallback() {
		window.clearTimeout(this.timer)
	}
}
