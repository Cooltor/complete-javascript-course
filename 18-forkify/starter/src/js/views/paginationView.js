import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return this._generateMarkupButton('next');
    }
    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return this._generateMarkupButton('prev');
    }
    // Other page
    if (this._data.page < numPages) {
      return (
        this._generateMarkupButton('prev') + this._generateMarkupButton('next')
      );
    }
    // Page 1 and there are NO other pages
    return '';
  }

  _generateMarkupButton(type) {
    return `
        <button data-goto="${
          type === 'prev' ? this._data.page - 1 : this._data.page + 1
        }" class="btn--inline pagination__btn--${type}">
            <span>Page ${
              type === 'prev' ? this._data.page - 1 : this._data.page + 1
            }</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-${
      type === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
            
        </button>
        `;
  }
}

export default new PaginationView();
