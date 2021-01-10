import { JustTimeWebcomponent } from './webcomponent'

if (!customElements.get('just-time')) {
	customElements.define('just-time', JustTimeWebcomponent)
}

declare global {
	interface HTMLElementTagNameMap {
		'just-time': JustTimeWebcomponent
	}
}
