/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
*/
interface IFoo {
    a: number
    b: string
}
 
type FooType = {
    a: number
    b: string
};

/**
 * 1)Если у нас два interface с одинаковыми именами, при использовании они будут объединены вместе. Т.е. будет доступ к свойствам, которые находятся в интерфейсах
 *  с одинаковыми именами. Пример ниже:
 */
 interface IFoo {
    с: number
    v: string
}
/**
 * Теперь если использовать IFoo, то у него будет 4 свойства, а не 2. Если провернуть такое же с type, то будет ошибка.
 * 
 * 2)type не может иметь несколько объявлений, а interface может (следствие из 1 пункта)
 */
 type SameName = {
    a:string;
};
type SameName = {
    a:string;
};
/**
 * 3)type можно только объявлять, но не реализовывать. Interface же реализуется производным классом.
 * 4)Важное отличие заключается в том, что type может объединять несколько других типов
 */
type Type1 = {
    a:string;
};
type Type2 = {
    a:string;
};
type TwoTypes = Type1 | Type2;