class Constants {
    static GARAGE_URL = 'http://127.0.0.1:3000/garage';

    static WINNERS_URL = 'http://127.0.0.1:3000/winners';

    static ENGINE_URL = 'http://127.0.0.1:3000/engine';

    static LOCK_INPUT_FIELDS = 'lock';

    static UNLOCK_INPUT_FIELDS = 'unlock';

    static REMOVE_BUTTON_IDENTIFIER = 'remove';

    static SELECT_BUTTON_IDENTIFIER = 'select';

    static START_ENGINE_IDENTIFIER = 'start';

    static ENGINE_START = 'started';

    static ENGINE_STOP = 'stopped';

    static STOP_ENGINE_IDENTIFIER = 'stop';

    static DEFAULT_COLOR_PICKER = '#000000';

    static CREATE_NEW_CAR_SUCCESS_MESSAGE = 'New car created successfully';

    static CREATE_NEW_CAR_FAIL_MESSAGE = 'Failed to create a new car';

    static DELETE_CAR_SUCCESS_MESSAGE = 'Car was deleted successfully';

    static DELETE_CAR_FAIL_MESSAGE = 'Failed to delete car';

    static UPDATE_CAR_SUCCESS_MESSAGE = 'Car was updated successfully';

    static UPDATE_CAR_FAIL_MESSAGE = 'Failed to update car';

    static FETCH_SPECIFIC_CAR_SUCCESS_MESSAGE = 'Car was received successfully';

    static FETCH_SPECIFIC_CAR_FAIL_MESSAGE = 'Failed to receive car';

    static EXCLUDED_ELEMENTS_FROM_DELEGATION = ['path', 'circle', 'svg', 'div'];

    static DELETE_WINNER_SUCCESS_MESSAGE = 'Winner was deleted';

    static DELETE_WINNER_FAIL_MESSAGE = 'Winner was deleted';

    static GET_WINNER_SUCCESS_MESSAGE = 'Winner was received';

    static GET_WINNER_FAIL_MESSAGE = 'Winner was not found';

    static SORT_BY_WINS_DESC = '?_sort=wins&_order=desc';

    static SORT_BY_WINS_ASC = '?_sort=wins&_order=asc';

    static SORT_BY_BEST_TIME_DESC = '?_sort=time&_order=desc';

    static SORT_BY_BEST_TIME_ASC = '?_sort=time&_order=asc';

    static RANDOM_CARS_BRANDS = [
        'Toyota',
        'Honda',
        'Ford',
        'Chevrolet',
        'BMW',
        'Mercedes-Benz',
        'Audi',
        'Volkswagen',
        'Nissan',
        'Hyundai',
        'Kia',
        'Volvo',
        'Lexus',
        'Subaru',
        'Mazda',
        'Jeep',
        'Tesla',
        'Ferrari',
        'Porsche',
        'Lamborghini',
    ];

    static RANDOM_CARS_MODELS = [
        'Camry',
        'Civic',
        'Mustang',
        'Cruze',
        '3Series',
        'EClass',
        'A4',
        'Golf',
        'Sentra',
        'Elantra',
        'Optima',
        'S60',
        'RX',
        'Impreza',
        'MX5',
        'Wrangler',
        'ModelS',
        '458Italia',
        '911',
        'Huracan',
    ];

    static COLOR_PICKER_LETTERS = '0123456789ABCDEF';

    static WILDEN_GITHUB_LINK = 'https://github.com/wilden5';

    static RS_SCHOOL_LINK = 'https://rs.school/';

    static RS_SCHOOL_IMG_LINK = 'https://rs.school/images/rs_school_js.svg';

    static START_RACE_IDENTIFIER = 'race';

    static GENERATE_CARS_IDENTIFIER = 'generate';

    static RESET_RACE_IDENTIFIER = 'reset';

    static NO_ONE_FINISHED_RACE = 'No one finished race :(';

    static UPDATE_WINNER_SUCCESSFUL_MESSAGE = 'Winner car was updated';

    static UPDATE_WINNER_FAILED_MESSAGE = 'Winner car was not updated';

    static CREATE_WINNER_SUCCESSFUL_MESSAGE = 'Winner car was added';

    static CREATE_WINNER_FAILED_MESSAGE = 'Winner car was not added';

    static CAR_SVG = `<svg width="100" viewBox="0 4 17.485 8.485">
  <path fill="#030104" d="M17.477,8.149c-0.079-0.739-3.976-0.581-3.976-0.581L11.853,5.23H4.275L3.168,7.567H0v2.404l2.029,0.682c0.123-0.836,0.843-1.48,1.711-1.48c0.939,0,1.704,0.751,1.73,1.685l6.62,0.041c0.004-0.951,0.779-1.726,1.733-1.726c0.854,0,1.563,0.623,1.704,1.439l1.479-0.17C17.006,10.442,17.556,8.887,17.477,8.149z M4.007,7.568l0.746-1.771h2.864l0.471,1.771H4.007z M8.484,7.568L8.01,5.797h3.67l1.137,1.771H8.484z"/>
  <circle fill="#030104" cx="3.759" cy="10.966" r="1.289"/>
  <circle fill="#030104" cx="13.827" cy="10.9" r="1.29"/>
</svg>`;
}

export default Constants;
