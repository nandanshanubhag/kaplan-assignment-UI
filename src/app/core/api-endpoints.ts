import { environment } from 'src/environments/environment';

export class API {
    private static BASE_URL = environment.BASE_URL;

    // Common APIS
    public static UPCOMING_COURSES = `${API.BASE_URL}/api/course/upcoming`;
}
