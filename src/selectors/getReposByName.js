export const getReposByName = (name, repositorios) => {
    let nombre = name.toLocaleLowerCase();
    console.log(name)

    return repositorios.filter((repositorio) =>
        repositorio.name.toLocaleLowerCase().includes(nombre)
    );
};
