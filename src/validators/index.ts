const format = (err: any) => {
  const errors = [] as any;
  err.inner.forEach((e: any) => {
    errors.push({
      path: e.path,
      message: e.message,
    });
  });
  return {errors};
};

export {format};
