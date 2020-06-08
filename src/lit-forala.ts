import { customElement, html, LitElement, query } from 'lit-element';

@customElement('lit-forala')
export class LitForala extends LitElement {
	@query('#editor')
	private editorEl?: HTMLDivElement;

	protected render() {
		return html`
			<link href="../node_modules/froala-editor/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
			<div id="editor"></div>
		`;
	}

	protected firstUpdated() {
		// tslint:disable-next-line no-unused-expression-chai
		new window.FroalaEditor(this.editorEl);
	}
}
