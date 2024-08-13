import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/shared/base-layout';
import { Repositories } from '@/features/repositories';


export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Repositories />} />
    </Route>
  </Routes>
);
