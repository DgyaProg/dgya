import React from 'react'
import { MainLayout } from '../../../../layouts/MainLayout'
import { useParams } from 'react-router-dom'

export const DeleteSoliPage = () => {
   const {id} = useParams()
  return (
    <MainLayout>
        <h1 className="text-3xl text-center font-bold my-4 md:mb-5">Eliminar Solicitud: {id}</h1>
        
    </MainLayout>
  )
}