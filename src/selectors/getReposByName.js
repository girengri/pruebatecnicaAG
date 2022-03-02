export const getReposByName = (name, repositorios) => {
    let nombre = name.toLocaleLowerCase();

    return repositorios.filter((repositorio) =>
        repositorio.name?.toLocaleLowerCase().includes(nombre)
    );
};
