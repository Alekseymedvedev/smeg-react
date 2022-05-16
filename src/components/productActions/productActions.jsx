import React from 'react';

const ProductActions = () => {
    return (
        <ul className="card-actions">
            <li className="card-actions__item">
                <button
                    type="button"
                    className="card-actions__link"
                    data-card-action-tooltip="Добавить в избранное"
                >
                    <svg
                        width="24px"
                        height="24px"
                    >
                        {/*<use xlink:href="images/svg-icons/sprites/user-icons.svg#heart-icon"></use>*/}
                    </svg>
                </button>
            </li>

            <li className="card-actions__item card-actions__item--compare">
                <button
                    type="button"
                    className="card-actions__link"
                    data-card-action-tooltip="Добавить в сравнение"
                >
                    <svg
                        width="24px"
                        height="24px"
                    >
                        {/*<use xlink:href="images/svg-icons/sprites/user-icons.svg#compare-icon"></use>*/}
                    </svg>
                </button>
            </li>

            <li className="card-actions__item">
                {/*{{*/}
                {/*    cartButton({*/}
                {/*                   icon: opts.icon,*/}
                {/*                   text: opts.btnText,*/}
                {/*                   modifs: opts.modifsBtn,*/}
                {/*                   elems: {*/}
                {/*                       text: {*/}
                {/*                           modifs: opts.modifsText*/}
                {/*                       }*/}
                {/*                   }*/}
                {/*               })*/}
                {/*}}*/}
            </li>
        </ul>
    );
};

export default ProductActions;