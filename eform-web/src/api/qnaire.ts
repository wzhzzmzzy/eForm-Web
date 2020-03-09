import {service} from "@/utils/request";

export const newQnaire = async (type: boolean, data: any) =>
  service({
    url: '/qnaire',
    method: 'POST',
    params: {
      a: type,
    },
    data
  });

export const getQnaireById = async (id: number) =>
  service({
    url: '/qnaire',
    method: 'GET',
    params: {
      id
    }
  });

export const deleteQnaire = async (id: number, type: string) =>
  service({
    url: '/qnaire',
    method: 'DELETE',
    params: {
      a: type,
    },
    data: {id}
  });


export const getQnaireExcelTemplate = () => {
  window.open('http://localhost:8002/files/qnaire_excel_template.xlsx');
};

export const uploadURL = '/api/import/excel';