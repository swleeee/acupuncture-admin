import { useDaumPostcodePopup } from 'react-daum-postcode';

export const usePostcode = (
  onSearch: (zipCode: string, address: string) => void,
) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    console.log(data);

    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    onSearch(data.zonecode, fullAddress);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    open({ onComplete: handleComplete });
    e.preventDefault();
  };

  return { handleAddressSearchPopupOpen: handleClick };
};

export default usePostcode;
